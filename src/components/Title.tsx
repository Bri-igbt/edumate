const Title = ({ title, description }: {title: string, description: string}) => {
    return (
        <div className='flex flex-col items-center pt-12'>
            <h3 className='text-3xl font-bold text-gray-800'>{title}</h3>
            <p className='text-slate-500 max-w-[500px]'>{description}</p>
        </div>
    )
}
export default Title
