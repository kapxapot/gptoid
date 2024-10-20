import { GenericSection } from "./generic";

export function TermsSection() {
  return (
    <GenericSection
      id="terms"
      name="Terms"
      title="Terms of Use"
    >
      <div className="space-y-3">
        <p><strong>Last Updated:</strong> Oct 20, 2024</p>

        <p>Welcome to GPToid! By using our Telegram bot, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using GPToid.</p>

        <h3 className="font-bold">1. Acceptance of Terms</h3>

        <p>By accessing or using GPToid, you agree to these Terms of Use and our Privacy Policy. If you do not agree with any part of these terms, you must not use the bot.</p>

        <h3 className="font-bold">2. Description of Service</h3>

        <p>GPToid allows users to chat with ChatGPT and create DALL-E 3 images. The bot offers various modes and built-in roles, as well as the ability to configure custom prompts. GPToid is available in both Russian and English.</p>

        <h3 className="font-bold">3. Free and Paid Tiers</h3>

        <p>GPToid operates on a freemium model, offering both free and paid product bundles. Users can choose to access certain features for free or purchase paid products for additional functionalities.</p>

        <h3 className="font-bold">4. Payment</h3>

        <p>Payments for the paid services can be made in rubles and Telegram Stars. Prices are kept low and affordable to ensure accessibility for all users. All fees are non-refundable.</p>

        <h3 className="font-bold">5. User Responsibilities</h3>

        <p>Users are responsible for their interactions with the bot and must not:</p>

        <ul className="list-disc pl-6">
          <li>Use GPToid for any unlawful purpose.</li>
          <li>Harass, abuse, or harm others.</li>
          <li>Misrepresent their identity or affiliation with any person or organization.</li>
          <li>Attempt to gain unauthorized access to any part of the service.</li>
        </ul>

        <h3 className="font-bold">6. Modifications to the Service</h3>

        <p>We reserve the right to modify or discontinue GPToid, temporarily or permanently, with or without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of the service.</p>

        <h3 className="font-bold">7. Intellectual Property</h3>

        <p>All content, features, and functionality of GPToid, including but not limited to text, graphics, images, and software, are the exclusive property of GPToid or its licensors and are protected by copyright, trademark, and other intellectual property laws.</p>

        <h3 className="font-bold">8. Disclaimer of Warranties</h3>

        <p>GPToid is provided on an "as-is" and "as-available" basis. We do not warrant that the service will be uninterrupted, or free of errors. Your use of GPToid is at your own risk.</p>

        <h3 className="font-bold">9. Limitation of Liability</h3>

        <p>To the fullest extent permitted by law, GPToid and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service.</p>

        <h3 className="font-bold">10. Governing Law</h3>

        <p>These Terms of Use shall be governed by and construed in accordance with the laws of Georgia, without regard to its conflict of law principles.</p>

        <h3 className="font-bold">11. Changes to Terms</h3>

        <p>We may update these Terms of Use from time to time. We will notify you of any changes by posting an announcement in the bot. Your continued use of GPToid after any changes constitutes your acceptance of the new terms.</p>

        <h3 className="font-bold">12. Contact Information</h3>

        <p>For any questions about these Terms of Use, please contact us in <a href="https://t.me/GPToidFanClub" target="_blank" className="underline">Telegram</a>.</p>
      </div>
    </GenericSection>
  );
}
