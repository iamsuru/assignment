# Hypermart Checkout Assignment System

This is a simple project that simulates how customers are assigned to checkout machines in a hypermart. The main goal is to make sure each customer is directed to the queue with the least total number of items, helping balance the load across all checkouts.

## Tech Stack

- HTML
- CSS
- JavaScript
- Bootstrap (for responsive styling)

## Problem Statement

Whenever a new customer arrives, they bring a certain number of items. We need to assign them to a checkout machine such that:

- They join the queue with the lowest total number of items.
- If there's a tie (i.e., two or more queues have the same total), the customer goes to the leftmost queue.

## Features

- Clean and responsive user interface.
- Shows live updates of checkout queues as new customers arrive.
- Automatically calculates totals and assigns customers to the best queue.
- Easy to test with different item quantities and queue loads.

## How it Works

1. The system starts with 3 empty checkout queues.
2. As you add customers (by entering the number of items they're carrying), they are immediately placed into the most efficient queue.
3. Each queue displays:
   - The list of customers (represented by their item counts).
   - The total number of items in that queue.

This helps visualize how the load is being distributed in real-time.

## Time Complexity

- Finding the best queue: O(n) where n is the number of checkout counters.
- UI update: Linear based on the number of total customers, O(n + m).

## Getting Started

1. Clone this repository or download the ZIP.
2. Open the index.html file in your browser.
3. Use the input field to enter the number of items a customer has and hit "Checkout items."
4. Watch the queues update in real-time.
