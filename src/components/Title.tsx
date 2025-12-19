const Title = ({ title }: {title: string}) => {
    return (
        <div className='flex flex-col items-center pt-12'>
            <h3 className='text-3xl font-bold text-gray-800'>{title}</h3>

        </div>
    )
}
export default Title
