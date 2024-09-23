import React from 'react'
import { useState } from "react";
import { Button, TextInput } from "@mantine/core";
import Link from 'next/link';
import { useRouter } from 'next/router';

const Search = () => {
  const [value, setValue] = useState('');
  const router = useRouter();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      router.push(`/searched/${ value }`);
      setValue("");
    }
  }
  return (
    <div className="flex flex-row p-4 items-center justify-center w-full">
      <TextInput
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        className="w-1/2"
        onKeyDown={handleKeyDown}
      />
      <Link href={`/searched/${ value }`}>
        <Button onClick={() => setValue('')}>
          Search
        </Button>
      </Link>

    </div >
  )
}

export default Search