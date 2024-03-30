import { useState, useEffect } from "react";
import axios from 'axios';

const useGuideMarkdown = (exerciseNumber: number) => {
  const [ markdown, setMarkdown ] = useState("");

  useEffect(() => {
    axios.get(`./guides/${exerciseNumber}.md`).then(res => setMarkdown(res.data));
  });

  return { markdown };
};

export default useGuideMarkdown;