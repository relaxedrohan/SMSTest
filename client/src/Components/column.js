import { format } from "date-fns";

const column = [
  { Header: "City", accessor: "city" },
  {
    Header: "Start date",
    accessor: "start_date",
    cell: ({ value }) => format(new Date(value), "dd/mm/yyyy"),
  },
  {
    Header: "End date",
    accessor: "end_date",
    cell: ({ value }) => format(new Date(value), "dd/mm/yyyy"),
  },
  { Header: "Price", accessor: "price" },
  { Header: "Status", accessor: "status" },
  { Header: "Color", accessor: "color" },
];

export default column;
