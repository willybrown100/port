function Footer() {
  const className = "max-w-6xl w-10/12 py-8 m-auto";
 const date = new Date().getFullYear()
 return (
   <footer className={`${className} flex gap-2 items-center text-lg`}>
     &copy; { date}
     <span >koja williams</span>
   </footer>
 );
}

export default Footer
