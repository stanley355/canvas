import React, { useState } from "react";
import Router from "next/router";
import { FaPen, FaSpinner, FaTimes } from "react-icons/fa";
import Button from "@/common/components/Button";
import { toast } from "react-toastify";
import { updateDocumentName } from "../lib/updateDocumentName";

interface IRenameDocBtn {
  docID: string;
  onChangeName?: (name: string) => void;
}

const RenameDocBtn = (props: IRenameDocBtn) => {
  const { docID, onChangeName } = props;
  const [openForm, setOpenForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const target = e.target as any;
    const name = target.name.value;

    if (!name) {
      toast.warning("Doc Name must be filled!");
      return;
    }

    setIsLoading(true);
    const payload = {
      id: docID,
      name,
    };

    const doc = await updateDocumentName(payload);
    if (doc?.id) {
      setIsLoading(false);
      toast.success("Document Name updated!");

      const path = Router.asPath;
      if (path === "/document") {
        setTimeout(() => window.location.reload(), 1000);
        return;
      }

      onChangeName && onChangeName(doc.name);
      return;
    }

    toast.error("Fail to update document name, please try again");
    setIsLoading(false);
    return;
  };

  return (
    <div className="relative">
      <Button
        type="button"
        wrapperClassName="px-1 rounded hover:text-white hover:bg-blue-900"
        buttonClassName="w-full"
        onClick={() => setOpenForm(!openForm)}
      >
        {openForm ? <FaTimes /> : <FaPen />}
      </Button>
      {openForm && (
        <form
          onSubmit={handleSubmit}
          className="absolute -top-4 left-[-360px] border border-black p-1 rounded flex items-center gap-2 w-fit bg-blue-900"
        >
          <label htmlFor="name_input">
            <input
              type="text"
              placeholder="Rename Document"
              id="name_input"
              name="name"
              className="p-2 rounded text-black"
            />
          </label>
          <Button
            type="submit"
            disabled={isLoading}
            wrapperClassName="w-fit text-white p-2 ml-auto text-md rounded-md font-semibold text-center"
            buttonClassName="w-full h-full hover:underline"
          >
            {isLoading ? (
              <div className="flex flex row items-center justify-center">
                <FaSpinner className="animate-spin" />
              </div>
            ) : (
              "Update"
            )}
          </Button>
        </form>
      )}
    </div>
  );
};

export default RenameDocBtn;
