import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  // {
  //   icon: "BotMessageSquare",
  //   title: "Chat with ChatGPT",
  //   description: "Engage in dynamic conversations with ChatGPT, your AI-powered assistant. Whether you need information, advice, or simply want to chat, GPToid is here to help!"
  // },
  // {
  //   icon: "Image",
  //   title: "Create Stunning DALL-E 3 Images",
  //   description: "Transform your ideas into breathtaking visuals with DALL-E 3. Generate unique images based on your prompts and share them directly in Telegram."
  // },
  {
    icon: "Flower",
    title: "Beautifully Rendered Outputs",
    description: "Receive AI-generated responses and images beautifully formatted within Telegram, making sharing and showcasing your creations easy and visually appealing."
  },
  {
    icon: "VenetianMask",
    title: "Multiple Modes & Built-in Roles",
    description: "Explore different modes tailored for various tasks and interactions. Choose from several built-in roles to enhance your experience, whether you're seeking creativity, information, or companionship."
  },
  {
    icon: "Bolt",
    title: "Custom Prompt Configuration",
    description: "Personalize your interactions by setting up custom prompts. Tailor the AI's responses to suit your specific needs and preferences."
  },
  // {
  //   icon: "Globe",
  //   title: "Bilingual User Interface",
  //   description: "Navigate effortlessly with our user-friendly interface available in both Russian and English. Enjoy a smooth experience, no matter your language preference."
  // },
  {
    icon: "Coins",
    title: "Affordable Pricing",
    description: "Enjoy a free tier to explore GPToid's capabilities, with low-cost paid bundles available for advanced features. Experience high-quality AI without breaking the bank!"
  },
  // {
  //   icon: "Star",
  //   title: "Flexible Payment Options",
  //   description: "Conveniently pay in rubles or Telegram Stars. We offer a variety of payment methods to make your experience seamless."
  // },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Why <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">GPToid</span>?
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        There are many AI tools today. What makes GPToid stand out?
      </h3>

      <div className="grid max-w-lg sm:max-w-full sm:grid-cols-2 lg:max-w-5xl gap-4 mx-auto">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle className="text-center">
                  {title}
                </CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
