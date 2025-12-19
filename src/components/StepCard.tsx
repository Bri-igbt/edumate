const StepCard = ({ step, title, desc, icon: Icon }: { step: number; title: string; desc: string; icon: React.ComponentType<{ className?: string }> }) => {
    return (
        <div className="p-6 border rounded-lg bg-gradient-to-br from-purple-200 to-indigo-300 transition-colors">
            <div className="flex items-center gap-3 mb-3">
                <div className="rounded-md bg-gray-50 p-2 border">
                    <Icon className="size-5 text-gray-700" />
                </div>
                <div className="text-xs font-semibold text-gray-500">Step {step}</div>
            </div>
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{desc}</p>
        </div>
    );
}
export default StepCard
