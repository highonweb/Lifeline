pragma solidity >=0.5.0 <0.8.0;
import './Ownable.sol';
contract Organisation is Ownable {
    struct organisation {
        string name;
        string location;
        string ContactDetails;
    }
    uint public totalOrgs;
    organisation[] public orgs;
        function addOrg (string memory _name, string memory _location, string memory _ContactDetails) onlyOwner public returns (bool) {
            orgs.push(organisation(_name, _location, _ContactDetails));
            totalOrgs++;
        }
        function delOrg (uint _id) onlyOwner public returns (bool) {
            delete orgs[_id];
            if (totalOrgs != 1) {
                orgs[_id] = orgs[totalOrgs - 1];
                delete orgs[totalOrgs - 1];
            }
            totalOrgs--;
        }
        function updateOrg (uint _id, string memory _name, string memory _location, string memory _ContactDetails) onlyOwner public returns (bool) {
            orgs[_id] = organisation(_name, _location, _ContactDetails);
        }

}
