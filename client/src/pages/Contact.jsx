import Title from '../components/Title';

export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center h-full p-4 text-gray-800">
            <Title text="Contact Us" />
            <a href="mailto:inquiries@scafes.ca" className="text-blue-500 mt-4 underline">
                inquiries@scafes.ca
            </a>
        </div>
    );
}
