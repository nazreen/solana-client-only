import Markdown from "react-markdown"
import CollapsibleSection from "./CollapsibleSection"
import useGuideMarkdown from "@/hooks/useGuideMarkdown";

interface GuideProps {
    taskNumber: number
}

const Guide = ({ taskNumber } : GuideProps) => {
    const { markdown } = useGuideMarkdown(taskNumber);
    
    return (
        <div className="my-10 prose">
        <CollapsibleSection title="Guide">
          <Markdown>{markdown}</Markdown>
        </CollapsibleSection>
      </div>
    )
}

export default Guide