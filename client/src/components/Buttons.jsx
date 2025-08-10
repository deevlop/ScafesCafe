

export default function Button ({onClick, children}) {
    return (
        <button onClick={onClick} className="px-2 border-coffee-medium border-[0.1rem] py-2 bg-coffee-light text-black text-center whitespace-nowrap p-4 font-bold rounded-md text-[14px] md:text-[16px]">
            {children}
        </button>
    );
}
