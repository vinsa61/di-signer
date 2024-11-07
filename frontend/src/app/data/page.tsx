"use client";
import { useEffect, useState } from "react";

// Define the type for the data you're expecting
interface ResponseData {
  message: string;
}

export default function Home() {
  const [data, setData] = useState<ResponseData | null>(null); // data can be either the ResponseData type or null

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/`)
      .then((res) => res.json())
      .then((data: ResponseData) => setData(data)) // Type the data in the response
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Welcome to the Digital Signature App</h1>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
}
