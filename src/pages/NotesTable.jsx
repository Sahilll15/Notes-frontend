import React, { useEffect } from "react";
import { getNotesAdmin } from "../redux/notes/noteActions";
import { useDispatch, useSelector } from "react-redux";
import ActionIcon from "../components/ActionsIcons";
import AdminPanelSkeleton from "../components/skeletons/AdminPanelSkeleton";

const NotesTable = () => {
  const dispatch = useDispatch();
  const notesAdmin = useSelector((state) => state.note.notesAdmin);

  useEffect(() => {
    dispatch(getNotesAdmin());
  }, [dispatch]);

  return (
    <div className="overflow-x-auto mt-9">
      <div className="bg-gray-900 min-w-screen min-h-screen flex justify-center font-sans overflow-hidden">
        <div className="w-full lg:w-5/6">
          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-center">Name</th>
                  <th className="py-3 px-6 text-center">Subject</th>
                  <th className="py-3 px-6 text-center">Note Uploaded</th>
                  <th className="py-3 px-6 text-center">Coins</th>
                  <th className="py-3 px-6 text-center">Status</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {notesAdmin?.length === 0 ? (
                  <>
                    <AdminPanelSkeleton />
                  </>
                ) : (
                  notesAdmin?.map((note) => (
                    <tr
                      className="border-b border-gray-200 hover:bg-gray-100"
                      key={note._id}
                    >
                      <td className="py-3 px-6 text-center whitespace-nowrap">
                      <td className="py-3 px-6 text-center">
                        <div className="flex items-center justify-center">
                          <span>{note?.author?.username}</span>
                        </div>
                      </td>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex items-center justify-center">
                          <span>{note.subject}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex items-center justify-center">
                          <span>{note?.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex items-center justify-center">
                          <span>{note?.author?.coins}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <span
                          className={`bg-${
                            note.acceptedStatus ? "green" : "red"
                          }-200 text-${
                            note.acceptedStatus ? "green" : "red"
                          }-600 py-1 px-3 rounded-full text-xs`}
                        >
                          {note.acceptedStatus ? "Accepted" : "Not Accepted"}
                        </span>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex gap-4 item-center justify-center">
                          <ActionIcon icon="edit" note={note} />
                          <ActionIcon icon="delete" note={note} />
                          <ActionIcon
                            icon="accept"
                            status={note?.acceptedStatus}
                            note={note}
                          />
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesTable;
