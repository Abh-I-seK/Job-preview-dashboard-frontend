
export default function AboutSection(){
    return(
      <div className="px-5 leading-relaxed py-6 ">
        <span className="text-[#6E6D6D] text-sm font-medium">About the job</span>
        <div className="text-[#3D3D3D] test-md font-medium">
          <ol className="list-decimal px-5">
            <li>Handle the UI/UX research and design</li>
            <li>Work on researching on the latest web applications designs & trends</li>
            <li>Work on conceptualizing and visualizing</li>
            <li>Work on creating graphic content and other graphic related works</li> 
          </ol>
          Benifits:
          <ul className="list-disc px-5">
            <li>Health Insurance</li>
            <li>Provident Fund</li>
          </ul>
          Schedule:
          <ul className="list-disc px-5">
            <li>Day Shift</li>
          </ul>
          Supplemental Pay Types:
          <ul className="list-disc px-5">
            <li>Performance Bonus</li>
            <li>Yearly Bonus</li>
          </ul>
          Work Location: In person
        </div>
      </div>
    )
  }