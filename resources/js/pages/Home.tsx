import AnimateOnView from '@/components/AnimateOnView';
import Features from '@/components/Features';
import ProcessSteps from '@/components/ProcessSteps';
import Requirements from '@/components/Requirements';
import TestimonialSection from '@/components/TestimonialSection';
import { Hero } from '@/components/ui/Hero';
import LandingLayout from '@/layouts/landing-layout';
import { Head } from '@inertiajs/react';

interface Step {
    id?: number;
    title: string;
    description: string;
    image_url: string | null;
}

interface FeatureItem {
    id?: number;
    title: string;
    description: string;
}

interface Props {
    hero: any;
    heroItems: { id: number; image_path: string }[] | null;
    loanSection: { title: string } | null;
    loanItems: Step[];
    requirementsSection: any;
    requirementItems: Step[];
    featuresSection: { title: string } | null;
    featureItems: FeatureItem[];

    testimonialSection: any[];
    locale: string;
}

export default function Home({
    hero,
    heroItems,
    loanSection,
    loanItems,
    requirementsSection,
    requirementItems,
    featuresSection,
    featureItems,
    testimonialSection,
    locale,
}: Props) {
    return (
        <LandingLayout>
            <Head title="Home" />
            <div className="flex min-h-screen flex-col">
                <AnimateOnView delay={0.2}>
                    <Hero hero={hero} heroItems={heroItems} />
                </AnimateOnView>
                <ProcessSteps loanSection={loanSection} loanItems={loanItems} />
                <Requirements requirementsSection={requirementsSection} requirementItems={requirementItems} />
                <Features featuresSection={featuresSection} featureItems={featureItems} />
                <div className="h-[80px]"></div>
                <TestimonialSection testimonialsSection={testimonialSection} />
            </div>
        </LandingLayout>
    );
}
