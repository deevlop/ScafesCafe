import Title from '../components/Title';
import Subtitles from '../components/Subtitles';
import Subtitle2 from '../components/Subtitle2';
import Paragraph from '../components/Paragraph';

export default function About() {
    return (
        <div className="flex flex-col items-start justify-start w-auto h-auto text-gray-800 px-8 pt-2 pb-8 bg-black bg-opacity-80 rounded-md mt-20 mx-2">
            <Title text="About Us" />
            <Subtitles text="Our Story" />
            <Paragraph text="Welcome to ScafesCafe! We take pride in crafting the perfect blend of coffee and ice cream, featuring our signature dalgona-infused creations." />
            <Subtitle2 text="Dalgona Delights" />
            <Paragraph text="Whether you savor it as a refreshing beverage or atop our golden, crispy waffles, every bite and sip is a celebration of flavor." />
            <Subtitle2 text="A Local Treasure" />
            <Paragraph text="Our locally operated food truck, nestled in the heart of the University area, is more than just a place to grab a treat—it's a tribute to cherished memories." />
            <Paragraph text="Named after Scafe, my beloved childhood dog, this venture is a heartfelt homage to his enduring spirit." />
            <Subtitles text="Our Mission" />
            <Paragraph text="At ScafesCafe, our mission is to create a welcoming haven where connections are made, moments are cherished, and exceptional coffee and cuisine come together to inspire joy." />
        </div>
    );
}
