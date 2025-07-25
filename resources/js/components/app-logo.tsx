import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <div className="flex aspect-square size-8 items-center justify-center rounded-md">
                <AppLogoIcon className="size-5 fill-current" />
            </div>
            <div className="ml-1 grid flex-1 text-left text-lg">
                <span className="mb-0.5 truncate leading-none font-semibold">Loan for</span>
                <span className="mb-0.5 truncate leading-none font-semibold">Mobile home</span>
            </div>
        </>
    );
}
