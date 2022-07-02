
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../Firebase/firebase.init'
import Loading from '../../Shared/Loading/Loading'

export default function User() {
    const [user, loading] = useAuthState(auth)
    if (loading) {
        return <Loading />
    }
    return (
        <div className="bg-white shadow-xl overflow-hidden sm:rounded-lg h-fit pb-20">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">User Information</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details</p>
            </div>
            <div className="border-t border-gray-200">
                <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Full name</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.displayName}</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Skill</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Full Stack Web Developer</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Email address</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.email}</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Address</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            Hospital-Road, Maijdi, Court - 3800, Noakhali, Bangladesh
                        </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">About</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            Hello <br />
                            I am a junior MERN stack web developer < br />
                            My expertise includes React, Node.js, MongoDB,  HTML, CSS, Tailwind, bootstrap <br />
                            I Have created some projects with these languages, <br />
                            I love coding, I'm always looking forward to new technologies. That's why I chose web development as my career.
                            I would love to be a full-stack developer

                        </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Password</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <input type="password" defaultValue={'12345678910'}
                                className='input input-bordered w-full max-w-xs'
                            />
                            <div className='btn-group mt-3'>
                                <button className='btn-link btn-sm text-sm'>Change Your Password</button>
                                <button className='btn-link btn-sm text-sm'>Forgot Password</button>
                            </div>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}
