import SkillItem from "./SkillItem"

const skillz = [
 {
 skill:"html"
},
 {
 skill:"css"
},
 {
 skill:"javascript"
},
 {
 skill:"jquery"
},
 {
 skill:"accesibility"
},
{
 skill:"tailwindcss"
},
{
skill:"figma"
},
]

function Skills() {

 return (
  <div className="grid grid-cols-3 gap-[1rem]">
   {skillz.map((item)=><SkillItem item={item} key={item.skill}/>)}
  </div>
 )
}

export default Skills
