import React from "react";
import { Section } from "../../_components/section";
import Link from "next/link";

const binarySearchCode = `
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1  # Target not found
`;

export default function BinarySearch() {
  return (
    <Section title="Binary Search">
      <div className="space-y-6">
        <p className="text-lg">
          Binary search is an efficient algorithm for searching a sorted array by repeatedly
          dividing the search interval in half.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Python Implementation</h2>
          <pre className="bg-gray-200 p-2 rounded">
            <code>{binarySearchCode}</code>
          </pre>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">How it works:</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Initialize two pointers, <code>left</code> and <code>right</code>, to the start and
              end of the array.
            </li>
            <li>
              While <code>left</code> is less than or equal to <code>right</code>:
            </li>
            <li>
              Calculate the middle index <code>mid</code>.
            </li>
            <li>If the middle element is the target, return its index.</li>
            <li>If the target is greater, search the right half.</li>
            <li>If the target is smaller, search the left half.</li>
            <li>If the target is not found, return -1.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Time Complexity:</h2>
          <p>O(log n) - where n is the number of elements in the array.</p>
        </div>

        <Link href="/leetcode" className="text-miami-blue underline">
          Back to LeetCode Cheatsheet
        </Link>
      </div>
    </Section>
  );
}
