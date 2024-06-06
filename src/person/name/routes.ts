import * as api from "./api";
import Edit from "./edit";

export default [
  {
    path: ":nameId",
    children: [
      {
        path: "edit",
        Component: Edit,
        loader: ({ params: { personId, nameId } }: any) => api.find(personId, nameId),
        handle: {
          breadcrumb: "Rename",
        },
      },
    ],
  },
];
