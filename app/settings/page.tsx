import ProfileSettingsForm from "@/app/ui/profile-settings-form";

export default function SettingsPage() {
  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Profil Ayarları</h1>
      <ProfileSettingsForm />
    </div>
  );
}
