//Global footer with copyright, social icons.
function Footer() {
  return (
    <footer className="py-8 bg-[#0e0e10] border-t border-[#818cf8]/20 text-center">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[#a1a1aa] text-sm">
            © {new Date().getFullYear()} CodeFit. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[#818cf8] text-sm">Where Code Meets Core Strength</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer