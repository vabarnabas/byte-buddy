import Layout from "@/components/layout/layout";
import checkAnswer from "@/services/checkAnswer";
import getProblem from "@/services/getProblem";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import useSWRImmutable from "swr/immutable";
import { BsCheckSquareFill, BsFillXSquareFill } from "react-icons/bs";
import { HiX } from "react-icons/hi";
import Spinner from "@/components/spinner/spinner";

export default function EditorPage() {
  const [code, setCode] = useState("");
  const [check, setCheck] = useState(false);

  const { data, isValidating } = useSWRImmutable(
    "getProblem",
    async () => {
      const response = await getProblem({
        language: "javascript",
        level: "impossible",
      });

      return response;
    },
    {
      revalidateOnMount: true,
    }
  );

  const {
    data: checkData,
    isValidating: checkIsValidating,
    mutate,
  } = useSWRImmutable(
    check ? "checkAnswer" : null,
    async () => {
      const response = await checkAnswer({
        answer: code,
        problemStatement: JSON.parse(data.choices[0].message.content),
      });

      return response;
    },
    {
      revalidateOnMount: true,
    }
  );

  return (
    <Layout>
      <div className="w-full max-w-[1280px] mt-2">
        {check &&
        !checkIsValidating &&
        checkData &&
        Object.keys(checkData).length !== 0 ? (
          <div className="flex flex-col items-center w-full mb-8 p-3 relative rounded-md overflow-hidden">
            <HiX
              onClick={() => setCheck(false)}
              className="absolute right-3 z-10 text-lg cursor-pointer top-3"
            />
            <span className="text-4xl mb-4">
              {JSON.parse(checkData.choices[0].message.content).isCorrect ? (
                <BsCheckSquareFill className="text-green-500" />
              ) : (
                <BsFillXSquareFill className="text-rose-500" />
              )}
            </span>
            <p className="text-center font-medium">
              {JSON.parse(checkData.choices[0].message.content).explanation}
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-5 group-hover:opacity-40 transition-opacity ease-in-out duration-200"></div>
          </div>
        ) : null}
        {!isValidating &&
        data &&
        Object.keys(data).length !== 0 &&
        !data?.error ? (
          <>
            <div className="mb-1.5 relative p-3 rounded-b-md rounded-t-lg overflow-hidden">
              <p className="">
                <span className="font-semibold z-10">Problem Statement:</span>{" "}
                {JSON.parse(data.choices[0].message.content).problemStatement}
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-10 group-hover:opacity-40 transition-opacity ease-in-out duration-200"></div>
            </div>
            <Editor
              className="rounded-t-md rounded-b-lg"
              height="60vh"
              defaultLanguage="typescript"
              theme="vs-dark"
              value={code}
              onChange={(e) => setCode(e || "")}
            />
            <button
              onClick={async (e) => {
                e.preventDefault();
                await setCheck(true);
                await mutate();
              }}
              className="mt-4 bg-gradient-to-r w-full from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white rounded-md px-5 py-2 font-medium"
            >
              Submit
            </button>
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </Layout>
  );
}
