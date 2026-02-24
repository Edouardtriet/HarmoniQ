import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  DialogDescription 
} from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

export function LanguageModal() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if user has already selected a language
    const hasSelectedLanguage = localStorage.getItem("pln-language-selected");
    
    if (!hasSelectedLanguage) {
      // Show modal after a short delay
      const timer = setTimeout(() => {
        setOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleLanguageSelect = (lang: "en" | "id") => {
    setLanguage(lang);
    localStorage.setItem("pln-language-selected", "true");
    setOpen(false);
  };

  const languages = [
    { 
      code: "en", 
      name: "English", 
      flag: "🇺🇸",
      image: "https://images.unsplash.com/photo-1524675053444-52c3ca294ad2?q=80&w=2000&auto=format&fit=crop"
    },
    { 
      code: "id", 
      name: "Bahasa Indonesia", 
      flag: "🇮🇩",
      image: "https://images.unsplash.com/photo-1540006386377-fdb4d203177e?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="glass sm:max-w-[600px] border-none">
        <DialogTitle className="text-2xl font-medium mb-2 text-center">
          Welcome to PLN | Selamat Datang di PLN
        </DialogTitle>
        <DialogDescription className="text-muted-foreground text-center mb-8">
          Please select your preferred language | Silakan pilih bahasa yang Anda inginkan
        </DialogDescription>
        
        <div className="py-4">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 12c2-2.96 0-7-1-8 0 3.038-1.773 4.741-3 6-1.226 1.26-2 3.24-2 5a6 6 0 1 0 12 0c0-1.532-1.056-3.94-2-5-1.786 3-2 4-4 2Z"/></svg>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {languages.map((lang) => (
              <div
                key={lang.code}
                className={`
                  rounded-xl overflow-hidden border transition-all duration-200 cursor-pointer spatial
                  ${language === lang.code ? 'border-primary ring-2 ring-primary/20' : 'border-white/10 hover:border-primary/30'}
                `}
                onClick={() => handleLanguageSelect(lang.code as "en" | "id")}
              >
                <div className="relative h-36">
                  <ImageWithFallback
                    src={lang.image}
                    alt={lang.name}
                    width={300}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{lang.flag}</span>
                      <span className="text-white font-medium">{lang.name}</span>
                    </div>
                    {language === lang.code && (
                      <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <Check className="h-4 w-4 text-white" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Button
              className="glass bg-primary/90 hover:bg-primary/100 rounded-full px-8"
              onClick={() => {
                localStorage.setItem("pln-language-selected", "true");
                setOpen(false);
              }}
            >
              Continue | Lanjutkan
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}