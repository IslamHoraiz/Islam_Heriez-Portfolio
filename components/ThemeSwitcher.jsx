'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Monitor, Moon, Sun, Palette, Check, Settings } from 'lucide-react';

// 🎨 كل الثيمات الجميلة اللي عندنا
const themes = [
  {
    name: 'corporate-blue',
    label: 'شركات أزرق',
    description: 'ثيم احترافي للأعمال',
    color: 'bg-blue-500',
    icon: '🏢'
  },
  {
    name: 'professional-green',
    label: 'نجاح أخضر',
    description: 'ركز على النمو والنجاح',
    color: 'bg-green-500',
    icon: '📈'
  },
  {
    name: 'executive-purple',
    label: 'تنفيذي بنفسجي',
    description: 'القيادة والابتكار',
    color: 'bg-purple-500',
    icon: '👔'
  },
  {
    name: 'modern-orange',
    label: 'طاقة برتقالي',
    description: 'إبداعي ومليان طاقة',
    color: 'bg-orange-500',
    icon: '⚡'
  },
  {
    name: 'tech-cyan',
    label: 'تكنولوجيا سيان',
    description: 'تقنية وابتكار',
    color: 'bg-cyan-500',
    icon: '💻'
  },
  {
    name: 'light',
    label: 'فاتح كلاسيك',
    description: 'نظيف وبسيط',
    color: 'bg-gray-100',
    icon: '☀️'
  },
  {
    name: 'dark',
    label: 'غامق احترافي',
    description: 'مريح للعين',
    color: 'bg-gray-800',
    icon: '🌙'
  },
  {
    name: 'system',
    label: 'نظام الجهاز',
    description: 'يتبع إعدادات جهازك',
    color: 'bg-gradient-to-r from-gray-400 to-gray-600',
    icon: '🖥️'
  }
];

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = themes.find(t => t.name === theme) || themes[0];

  return (
    <div className="fixed bottom-6 left-6 z-50 no-print">
      {/* الزرار الرئيسي الجميل */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 animate-pulse hover:animate-none"
        aria-label="اختيار الثيم"
      >
        <div className="relative">
          {theme === 'light' && <Sun className="h-5 w-5" />}
          {theme === 'dark' && <Moon className="h-5 w-5" />}
          {theme === 'system' && <Monitor className="h-5 w-5" />}
          {!['light', 'dark', 'system'].includes(theme || '') && <Palette className="h-5 w-5" />}
          
          {/* نقطة تنبيه للثيمات المخصصة */}
          {!['light', 'dark', 'system'].includes(theme || '') && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-ping" />
          )}
        </div>
        
        {/* نص المعاينة عند التمرير */}
        <div className="absolute bottom-full left-0 mb-2 px-3 py-1 bg-popover text-popover-foreground text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          الحالي: {currentTheme.label}
        </div>
      </button>

      {/* قائمة اختيار الثيمات الجميلة */}
      {isOpen && (
        <div className="absolute bottom-full left-0 mb-4 w-80 bg-card border border-border rounded-xl shadow-lg animate-scale-in">
          {/* العنوان */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Settings className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">اختيار الثيم</h3>
                <p className="text-sm text-muted-foreground">اختار الثيم اللي يعجبك</p>
              </div>
            </div>
          </div>

          {/* خيارات الثيمات */}
          <div className="p-2 max-h-96 overflow-y-auto">
            <div className="grid gap-1">
              {themes.map((themeOption) => (
                <button
                  key={themeOption.name}
                  onClick={() => {
                    setTheme(themeOption.name);
                    setIsOpen(false);
                  }}
                  className={`
                    group relative w-full p-3 rounded-lg text-left transition-all duration-200
                    hover:bg-accent hover:text-accent-foreground
                    ${theme === themeOption.name ? 'bg-primary/10 text-primary' : 'text-card-foreground'}
                  `}
                >
                  <div className="flex items-center gap-3">
                    {/* مؤشر لون الثيم */}
                    <div className="flex-shrink-0">
                      <div className={`w-6 h-6 rounded-full ${themeOption.color} shadow-sm border-2 border-background group-hover:scale-110 transition-transform`} />
                    </div>
                    
                    {/* معلومات الثيم */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{themeOption.label}</span>
                        <span className="text-lg">{themeOption.icon}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{themeOption.description}</p>
                    </div>
                    
                    {/* إشارة الاختيار */}
                    {theme === themeOption.name && (
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                    )}
                  </div>
                  
                  {/* تأثير التمرير */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </button>
              ))}
            </div>
          </div>

          {/* ملاحظة في الأسفل */}
          <div className="p-3 border-t border-border bg-muted/50 rounded-b-xl">
            <p className="text-xs text-muted-foreground text-center">
              الثيمات بتتحفظ تلقائياً في المتصفح
            </p>
          </div>
        </div>
      )}

      {/* خلفية للإغلاق */}
      {isOpen && (
        <div
          className="fixed inset-0 -z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}