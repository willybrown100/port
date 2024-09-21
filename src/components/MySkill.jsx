import React from 'react'
import SkillItem from "../components/SkillItem"


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

export default function MySkill() {
  return (
    <div className="grid grid-cols-3 gap-[1rem]">
   {skillz.map((item)=><SkillItem item={item} key={item.skill}/>)}
  </div>
  )
}

