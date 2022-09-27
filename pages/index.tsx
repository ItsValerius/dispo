import type { NextPage } from "next";
import Nav from "../components/Nav";
import Table from "../components/Table";

const Home: NextPage = () => {
  const tableData = [
    {
      id: 1,
      first: "Mark",
      last: "Otto",
      handle: "@mdo",
    },
    {
      id: 2,
      first: "Jacob",
      last: "Thornton",
      handle: "@fat",
    },
    {
      id: 3,
      first: "Larry",
      last: "Wild",
      handle: "@twitter",
    },
  ];
  const headings = ["#", "First", "Last", "Handle"];
  return (
    <div className="flex h-full flex-col">
      <Nav />
      <Table data={tableData} headings={headings} />
    </div>
  );
};

export default Home;
