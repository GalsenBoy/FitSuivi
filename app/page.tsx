"use client";
import Charts from "@/components/card/Charts";
import LongTermResult from "@/components/result/LongTermResult";
import Result from "@/components/result/Result";
export default function Home() {
  return (
    <div>
      <Charts />
      <Result />
      <LongTermResult />
    </div>
  );
}
