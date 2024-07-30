import Container from "./container";

type Props = {
    title: string,
    children: React.ReactNode
};

export function Section({ title, children }: Props) {
    return (
        <div className="mx-auto mb-8 max-w-4xl">
            <Container>
                <h2 className="mb-4 text-2xl font-bold tracking-tighter leading-tight">
                    {title}
                </h2>
                <div>
                    {children}
                </div>
            </Container>
        </div>
    );
}