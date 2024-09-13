"use client";

import { api } from "@/convex/_generated/api";
// import { deleteTask } from "@/convex/models/tasks";
import { useMutation, useQuery } from "convex/react";

function TaskPage() {
  const tasks = useQuery(api.models.tasks.getTasks);
  const deleteTask = useMutation(api.models.tasks.deleteTask);

  return (
    <div className="p10 flex flex-col gap-4 items-center justify-center">
      <h1>All tasks are here in real-time</h1>

      {!tasks && "There are no tasks available"}

      {tasks?.map((task) => (
        <div key={task._id} className="flex gap-2 items-center">
          <span>{task.text}</span>
          <button
            onClick={async () => {
              await deleteTask({ id: task._id });
            }}
            className="bg-red-500 hover:bg-red-700 text-white rounded-md px-4 py-2"
          >
            Delete Task
          </button>
        </div>
      ))}
    </div>
  );
}
export default TaskPage;
