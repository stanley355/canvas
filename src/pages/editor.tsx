import { GetStaticProps } from 'next';
import React, {useMemo} from 'react';
import dynamic from "next/dynamic";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// const Scroll = dynamic(
//   () => {
//     return import(<ReactQuill theme="snow" value={value} onChange={setValue} />);
//   },
//   { ssr: false }
// );

const TextEditor = () => {
  const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }),[]);
  const [value, setValue] = React.useState('');

console.log(value)
    return (
      <div>
        <ReactQuill theme="snow"  />
      </div>
    )

}

export default TextEditor;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {}
  }
}