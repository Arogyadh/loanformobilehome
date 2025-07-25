import { Button } from '@/components/ui/button';
import { useAppearance } from '@/hooks/use-appearance';
import { Link, usePage } from '@inertiajs/react';
import { ArrowRight, Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
    const { t } = useTranslation();
    const { appearance, updateAppearance } = useAppearance();
    const { props } = usePage<{ locale: string }>();

    const isActive = (path: string) => props.url === path;

    return (
        <div className="my-auto hidden w-full max-w-5xl flex-1 items-center justify-between self-stretch px-4 lg:flex">
            {/* Left group: nav links */}
            <div className="flex items-center space-x-6">
                {[
                    { path: '/', label: 'nav.home' },
                    { path: '/services', label: 'nav.services' },
                    { path: '/understanding-loan', label: 'nav.understanding-loan' },
                    { path: '/team', label: 'nav.team' },
                    { path: '/investors', label: 'nav.investors' },
                    { path: '/contact', label: 'nav.contact' },
                ].map(({ path, label }) => (
                    <Link
                        prefetch="mount"
                        cache-for="5m"
                        key={path}
                        href={path}
                        className={`text-sm font-medium transition-colors duration-200 ${
                            isActive(path) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600 dark:text-gray-400'
                        }`}
                    >
                        {t(label)}
                    </Link>
                ))}
            </div>

            {/* Right group: Language / Theme / Auth */}
            <div className="flex items-center space-x-4">
                <button onClick={() => updateAppearance(appearance === 'light' ? 'dark' : 'light')}>
                    {appearance === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                </button>
                <LanguageSwitcher currentLocale={props.locale} />
                <Link
                    href="/login"
                    className={`text-sm font-medium transition-colors duration-200 ${
                        isActive('/login') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600 dark:text-gray-400'
                    }`}
                >
                    {t('nav.login')}
                </Link>
                <Link prefetch="mount" cache-for="5m" href="/apply">
                    <Button variant="primary">
                        {t('nav.apply')}
                        <ArrowRight className="h-5 w-5" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
