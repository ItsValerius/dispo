import React from 'react'
import Nav from '../../components/Nav';
import Table from '../../components/Table';
import Link from 'next/link';

const Aufträge = () => {

  const tableData = [
    {
      id: 1,
      first: "Mark",
      last: "Otto",
      handle: "@mdo",
    },
    {
      id: 2,
      first: "Mark",
      last: "Otto",
      handle: "@mdo",
    },
    {
      id: 3,
      first: "Mark",
      last: "Otto",
      handle: "@mdo",
    },
  ];
  const headings = ["#", "First", "Last", "Handle"];

  return (
    <div className="flex h-full flex-col">
      <Nav />
      <Link href={`/auftraege/details/${1}`}> Details</Link>
      <Table data={tableData} headings={headings} />
    </div>
  )
}

export default Aufträge