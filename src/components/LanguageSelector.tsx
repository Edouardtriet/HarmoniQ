import { useLanguage } from "../context/LanguageContext";
import { Button } from "./ui/button";
import { Check, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface LanguageSelectorProps {
  variant?: "default" | "minimal";
}

export function LanguageSelector({ variant = "default" }: LanguageSelectorProps) {
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: "en", name: t("language.en"), flag: "🇺🇸" },
    { code: "id", name: t("language.id"), flag: "🇮🇩" },
  ];

  if (variant === "minimal") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Globe className="h-5 w-5" />
            <span className="sr-only">{t("language.select")}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="glass">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => setLanguage(lang.code as "en" | "id")}
              className="flex items-center justify-between gap-2"
            >
              <span className="flex items-center gap-2">
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </span>
              {language === lang.code && <Check className="h-4 w-4" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <div className="glass p-4 rounded-xl">
      <h3 className="mb-4">{t("language.select")}</h3>
      <div className="flex flex-col gap-2">
        {languages.map((lang) => (
          <Button
            key={lang.code}
            variant={language === lang.code ? "default" : "outline"}
            onClick={() => setLanguage(lang.code as "en" | "id")}
            className="justify-start gap-2"
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
            {language === lang.code && <Check className="ml-auto h-4 w-4" />}
          </Button>
        ))}
      </div>
    </div>
  );
}