import { Section } from "../_components/section";
import Link from "next/link";

const leetcodeStrategies = [
  { condition: "If input array is sorted", strategies: ["Binary Search", "Two Pointers"] },
  { condition: "If given a tree", strategies: ["DFS", "BFS"] },
  { condition: "If asked for all permutations/subsets", strategies: ["Backtracking"] },
  { condition: "If given a graph", strategies: ["DFS", "BFS"] },
  { condition: "If given a linked list", strategies: ["Two Pointers"] },
  { condition: "If Recursion is banned", strategies: ["Stack"] },
  {
    condition: "If asked for max/min subarray/subsets/options",
    strategies: ["Dynamic Programming"],
  },
  { condition: "If asked for top/least K ITEMS", strategies: ["Heap"] },
  { condition: "If asked for common strings", strategies: ["Map", "Trie"] },
  { condition: "If need to keep count of distinct elements", strategies: ["Map", "Set"] },
  {
    condition: "Else",
    strategies: [
      "Map/Set for O(1) time & O(n) space",
      "Sort input for O(nLogn) time and O(1) space",
    ],
  },
];

export default function AllPosts() {
  return (
    <Section title="">
      <ul className="list-disc pl-5 mb-6">
        {leetcodeStrategies.map((item, index) => (
          <li key={index} className="mb-2">
            <strong>{item.condition}:</strong>
            <ul className="list-circle pl-5 mt-1">
              {item.strategies.map((strategy, strategyIndex) => (
                <li key={strategyIndex}>{strategy}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <Link href={`/`} className="text-miami-blue underline">
        Back to main
      </Link>
    </Section>
  );
}
