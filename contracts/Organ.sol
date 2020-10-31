pragma solidity >=0.5.0 <0.8.0;
import './DonorContract.sol';
import './Organisation.sol';
contract Organ is DonorContract,Organisation {
    struct organ{
        uint256 donorId;
        address orgAddress;
        bool donationStatus;
    }
        organ[] public Eyes;
        uint public totalEyes;
        organ[] public Kidney;
        uint public totalKidney;
        organ[] public Liver;
        uint public totalLiver;
        organ[] public Heart;
        uint public totalHeart;
        organ[] public Lungs;
        uint public totalLungs;

    modifier orgsOnly() {
        for (uint i = 0; i < totalOrgs; i++) {
            if (orgs[i].ad == msg.sender) {
                _;
            }
        }
    }
    function deceased(uint256 _id) orgsOnly public {
        bool eyes;
        bool kidney; 
        bool liver;
        bool heart;
        ( , , , , , , eyes,kidney,liver,heart,) = donorDetails(_id);
        if (eyes) {
            Eyes.push(organ(_id,msg.sender));
            totalEyes++;
        }
        if (kidney) {
            Kidney.push(organ(_id,msg.sender));
            totalKidney++;
        } if (liver) {
            Liver.push(organ(_id,msg.sender));
            totalLiver++;
        } if (heart) {
            Heart.push(organ(_id,msg.sender));
            totalHeart++;
        }
        if {
            Lungs.push(organ(_id,msg.sender));
            totalLungs++;
        }
    
}
    

}