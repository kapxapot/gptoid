import { GenericSection } from "./generic";

export function PrivacySection() {
  return (
    <GenericSection
      id="privacy"
      name="Privacy"
      title="Privacy Policy"
    >
      <div className="space-y-3">
        <p><strong>Effective Date:</strong> Oct 20, 2024</p>

        <p>This Privacy Policy describes how GPToid (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and protects your information when you use our Telegram bot.</p>

        <h3 className="font-bold">1. Information We Collect</h3>

        <p>When you interact with GPToid, we may collect the following types of information:</p>

        <ul className="list-disc pl-6">
          <li>User Input: Any messages, prompts, or commands you enter into the bot.</li>
          <li>User Preferences: Custom prompts and configurations you set within the bot.</li>
        </ul>

        <p>All payments are processed outside of the bot (by Telegram and 3rd party payment systems).</p>

        <h3 className="font-bold">2. How We Use Your Information</h3>

        <p>We use the collected information for the following purposes:</p>

        <ul className="list-disc pl-6">
          <li>To provide and maintain our services, including generating responses and images based on your input.</li>
          <li>To improve our services and user experience.</li>
          <li>To process payments for any paid products you may choose to purchase.</li>
          <li>To communicate with you regarding updates, offers, or support.</li>
        </ul>

        <h3 className="font-bold">3. User Data Isolation</h3>

        <p>We ensure that different users&apos; data is isolated, meaning that your data is not shared with other users of the bot. Each user&apos;s data is kept private and secure.</p>

        <h3 className="font-bold">4. Data Security</h3>

        <p>We take the security of your data seriously. Your information is accessible only to you and is protected through industry-standard security measures. We do not use cookies or trackers.</p>

        <h3 className="font-bold">5. Changes to This Privacy Policy</h3>

        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy in the bot. You are advised to review this Privacy Policy periodically for any changes.</p>

        <h3 className="font-bold">6. Contact Us</h3>

        <p>If you have any questions or concerns about this Privacy Policy, please contact us in <a href="https://t.me/GPToidFanClub" target="_blank" className="underline">Telegram</a>.</p>
      </div>
    </GenericSection>
  );
}
