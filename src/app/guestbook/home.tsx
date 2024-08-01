"use client";
import React, { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { createClient } from "@supabase/supabase-js";

interface GuestbookEntry {
  username: string;
  message: string;
  created_at: string;
}

export default function Home() {
  const { data: session } = useSession<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<GuestbookEntry[]>([]);
  const [userMsg, setUserMsg] = useState<string>("");

  const SUPABASE_URL = process.env
    .NEXT_PUBLIC_SUPABASE_URL as string;
  const SUPABASE_ANON_KEY = process.env
    .NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  const getGuestBookData = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("guestbook")
        .select()
        .order("created_at", { ascending: false });

      if (error) throw error;

      setMessages(data as GuestbookEntry[]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getGuestBookData();
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserMsg(e.target.value);
  };

  const createMessage = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from("guestbook")
        .insert([
          {
            message: userMsg,
            username: session?.user?.name,
          },
        ]);
      if (error) throw error;

      setUserMsg("");
      getGuestBookData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto max-w-5xl">
      {session ? (
        <>
          <div className="flex flex-col gap-5">
            <h4 className="text-lg">
              Signed in as {session?.user?.name}
            </h4>
            <div>
              <form
                onSubmit={createMessage}
                className="flex flex-row gap-3"
              >
                <input
                  type="text"
                  value={userMsg}
                  onChange={handleInput}
                  className="border-2 p-2 rounded-md w-full"
                  placeholder="Enter Your Message"
                />
                <button
                  type="submit"
                  className="bg-black px-5 py-2 rounded-md text-white w-full sm:w-[250px]"
                >
                  Submit
                </button>
              </form>
            </div>
            <button
              onClick={() => signOut()}
              className="bg-black text-white flex flex-row gap-3 items-center p-3 rounded-md w-full sm:w-[250px] justify-center"
            >
              Sign out
            </button>
          </div>
          <div className="mt-10 flex flex-col gap-3">
            {loading && <h1>Loading...</h1>}
            {messages &&
              messages.map((item: GuestbookEntry, index: number) => (
                <div
                  key={index}
                  className="flex flex-row gap-5 bg-secondary p-5 rounded-xl justify-between mt-5"
                >
                  <div className="left flex flex-row gap-5">
                    <p style={{ color: "#525252" }}>
                      {item.username} :
                    </p>
                    <p style={{ color: "#525252" }}>
                      {item.message}
                    </p>
                  </div>
                  <p style={{ color: "#525252" }}>
                    {item.created_at}
                  </p>
                </div>
              ))}
          </div>
        </>
      ) : (
        <button
          onClick={() => signIn("github")}
          className="bg-gray-900 flex flex-row justify-center gap-5 rounded-xl text-white px-5 py-2 sm:w-auto"
        >
          Sign in with Github
        </button>
      )}
    </div>
  );
}
