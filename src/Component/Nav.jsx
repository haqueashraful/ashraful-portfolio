const Nav = () => {
    return (
        <div className="flex justify-center items-center bg-transparent absolute top-0 right-0">
            <a
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                download="ashraful-resume.pdf"
                href="https://drive.google.com/uc?export=download&id=1e7r-Yb6lI6QhtR0j5nHbs5fq8FEuh_8R"
            >
                Download CV
            </a>
        </div>
    );
};

export default Nav;
