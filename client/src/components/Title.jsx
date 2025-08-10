export default function Title({ text }) {
    return (
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-coffee-light bg-black bg-opacity-70 p-2 rounded-md ">
            {text}
        </h1>
    );
}
