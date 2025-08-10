export default function Paragraph({ text }) {
    return (
        <p className="text-sm sm:text-base md:text-lg text-coffee-light mt-[0.15rem] px-4">
            {text}
        </p>
    );
}
