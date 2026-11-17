import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextIntlClientProvider messages={await getMessages()}>
      {children}
    </NextIntlClientProvider>
  );
}