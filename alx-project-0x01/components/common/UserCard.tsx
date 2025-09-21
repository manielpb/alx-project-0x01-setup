import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> =({id, name,  username, email, address, phone, website, company }) => {
    return (
        <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-800"> Name: {name} </h2>
                <p className="text-gray-600">Username: {username}</p>
                <p className="text-gray-600">ID: {id}</p>
                <p className="text-sm text-blue-600">Email: {email}</p>
            </div>
            <div className="mt-2">
                <p className="text-sm">
                    <span className="font-semibold">City:</span> {address.city}
                </p>
                <p className="text-sm">
                    <span className="font-semibold">Street:</span> {address.street}
                 </p>
                <p className="text-sm">
                    <span className="font-semibold">Suite:</span> {address.suite}
                </p>
                <p className="text-sm">
                    <span className="font-semibold">Zipcode:</span> {address.zipcode}
                </p>
                <p className="text-sm">
                    <span className="font-semibold">Coordinates-lat:</span> {address.geo.lat}
                </p>
                <p className="text-sm">
                    <span className="font-semibold">Coordinates-lon:</span> {address.geo.lng}
                </p>
                <p className="text-sm italic">Phone: {phone}</p>
                <p className="text-sm italic">Website: {website}</p>
                <p className="text-sm italic">Name of Company: {company.name}</p>
            </div>

        </div>
    );
};

export default Users;

