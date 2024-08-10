import { Section } from "../_components/section";
import Link from "next/link";

export default function Projects() {
  return (
    <Section title="Projects">
      <div className="flex flex-col">
        <Link href="/" className="text-miami-blue underline mb-8">
          Back to main
        </Link>
        <iframe
          src="https://www.youtube.com/embed/nM0zjgd5x_g"
          allowFullScreen
          className="w-full h-96 mb-8"
        />
        <h2 className="text-xl font-bold mb-4">Terminal Google Calendar using OpenAI</h2>
        <p className="mb-4">
          This project utilizes the gcsa package for Google Calendar integration and OpenAI for
          generating event details. Ensure you have an OpenAI API key to use this functionality.
        </p>
        <h3 className="text-lg font-semibold mb-2">Features:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Add new events to your Google Calendar</li>
          <li>Delete events from your calendar</li>
          <li>View existing events</li>
          <li>Manage calendar settings</li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">Requirements:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Python 3.x</li>
          <li>Google Calendar API credentials.json (OAuth)</li>
        </ul>
        <p className="mb-4">
          If you have a credentials.json (clientsecret*.json) file, GoogleCalendar will read all the
          needed data to generate the token and refresh-token from it.
        </p>
        <p className="mb-4">
          To read credentials.json (clientsecret*.json) from the default directory (~/.credentials)
          use:
        </p>
        <pre className="bg-gray-100 p-2 mb-4">
          <code>gc = GoogleCalendar()</code>
        </pre>
        <h3 className="text-lg font-semibold mb-2">Usage:</h3>
        <p className="mb-4">Run main script:</p>
        <pre className="bg-gray-100 p-2 mb-4">
          <code>python main.py</code>
        </pre>
        <p className="mb-4">Follow the on-screen prompts to interact with your Google Calendar.</p>
        <h3 className="text-lg font-semibold mb-2">File Structure:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>main.py: entry point of the application</li>
          <li>add_new_event.py: handles adding new events to the calendar</li>
          <li>delete_an_event.py: manages event deletion</li>
          <li>view_events.py: displays calendar events</li>
          <li>settings.py: manages calendar settings</li>
        </ul>
      </div>
    </Section>
  );
}
