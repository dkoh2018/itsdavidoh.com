import { Section } from "../_components/section";
import Link from "next/link";

export default function Projects() {
  return (
    <Section title="Projects">
      <div className="flex flex-col">
        <Link href="/" className="text-miami-blue underline mb-8">
          back to main
        </Link>
        <iframe
          src="https://www.youtube.com/embed/nM0zjgd5x_g"
          allowFullScreen
          className="w-full h-96 mb-8"
        />
        <h2 className="text-xl font-bold mb-4">google cal on your terminal</h2>
        <p className="mb-4">
          this project combines the gcsa package, google calendar api, and openai to create an
          intelligent, command-line google calendar manager. it leverages natural language
          processing, allowing users to manage their calendar through simple voice commands or text
          input. say goodbye to clicking buttons - just speak or type your requests, and the system
          will handle the rest.
        </p>
        <h3 className="text-lg font-semibold mb-2">features:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>add new events to your google calendar using natural language</li>
          <li>delete events from your calendar with simple commands</li>
          <li>view existing events in a user-friendly format</li>
          <li>manage calendar settings effortlessly</li>
          <li>ai-powered event suggestions and optimizations</li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">requirements:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>python 3.x</li>
          <li>
            <Link
              href="https://developers.google.com/calendar/api/quickstart/python"
              className="text-miami-blue underline"
            >
              google calendar api
            </Link>{" "}
            credentials.json (oauth)
          </li>
          <li>
            <Link
              href="https://google-calendar-simple-api.readthedocs.io/en/latest/"
              className="text-miami-blue underline"
            >
              gcsa package
            </Link>{" "}
            (google calendar simple api)
          </li>
          <li>
            openai api key (follow the{" "}
            <Link
              href="https://platform.openai.com/docs/api-reference/authentication"
              className="text-miami-blue underline"
            >
              openai documentation
            </Link>{" "}
            for setup)
          </li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">setting up:</h3>
        <ol className="list-decimal list-inside mb-4">
          <li>clone the repository from github</li>
          <li>
            install required packages: <code>pip install -r requirements.txt</code>
          </li>
          <li>set up google calendar api credentials and save as credentials.json</li>
          <li>add your openai api key to the .env file</li>
        </ol>
        <p className="mb-4">
          for detailed setup instructions, including how to obtain api keys and set up environment
          variables, please refer to the readme.md file in the project repository.
        </p>
        <h3 className="text-lg font-semibold mb-2">usage:</h3>
        <p className="mb-4">run the main script:</p>
        <pre className="bg-gray-100 p-2 mb-4">
          <code>python main.py</code>
        </pre>
        <p className="mb-4">
          follow the on-screen prompts to interact with your google calendar using natural language
          commands. the ai will interpret your inputs and perform the appropriate actions.
        </p>
        <h3 className="text-lg font-semibold mb-2">file structure:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>main.py: entry point of the application</li>
          <li>add_new_event.py: handles adding new events to the calendar</li>
          <li>delete_an_event.py: manages event deletion</li>
          <li>view_events.py: displays calendar events</li>
          <li>settings.py: manages calendar settings</li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">desktop shortcut (macos):</h3>
        <p className="mb-4">to create a desktop shortcut for easy access, follow these steps:</p>
        <ol className="list-decimal list-inside mb-4">
          <li>open terminal and navigate to your desktop</li>
          <li>
            create a new file: <code>nano run_gcal.command</code>
          </li>
          <li>
            add the following content:
            <pre className="bg-gray-100 p-2 mt-2 mb-2">
              <code>#!/bin/bash cd /path/to/your/project python3 main.py</code>
            </pre>
          </li>
          <li>save and exit (ctrl + o, then ctrl + x)</li>
          <li>
            make the file executable: <code>chmod +x run_gcal.command</code>
          </li>
        </ol>
        <p className="mb-4">
          now you can double-click the run_gcal.command file on your desktop to launch the
          application.
        </p>
        <p className="mb-10">
          <a
            href="https://github.com/dkoh2018/TerminalGoogleCal"
            className="text-miami-blue underline"
          >
            check out the github repo
          </a>
        </p>
      </div>
    </Section>
  );
}
