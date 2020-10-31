pragma solidity >=0.5.0 <0.8.0;
import "./DonorContract.sol";
import "./Organisation.sol";

contract Organ is DonorContract, Organisation {
    struct organ {
        uint256 donorId;
        address orgAddress;
        bool donationStatus;
    }
    organ[] public Eyes;
    uint256 public totalEyes;
    organ[] public Kidney;
    uint256 public totalKidney;
    organ[] public Liver;
    uint256 public totalLiver;
    organ[] public Heart;
    uint256 public totalHeart;
    organ[] public Lungs;
    uint256 public totalLungs;

    constructor() public {
        totalEyes = 0;
        totalKidney = 0;
        totalLiver = 0;
        totalHeart = 0;
        totalLungs = 0;
    }

    modifier orgsOnly() {
        for (uint256 i = 0; i < totalOrgs; i++) {
            if (orgs[i].ad == msg.sender) {
                _;
            }
        }
    }

    function deceased(uint256 _id) public orgsOnly {
        bool eyes;
        bool kidney;
        bool liver;
        bool heart;
        bool lung;
        (, , , , , , eyes, kidney, liver, heart, lung) = donorDetails(_id);
        if (eyes) {
            Eyes.push(organ(_id, msg.sender, false));
            totalEyes++;
        }
        if (kidney) {
            Kidney.push(organ(_id, msg.sender, false));
            totalKidney++;
        }
        if (liver) {
            Liver.push(organ(_id, msg.sender, false));
            totalLiver++;
        }
        if (heart) {
            Heart.push(organ(_id, msg.sender, false));
            totalHeart++;
        }
        if (lung) {
            Lungs.push(organ(_id, msg.sender, false));
            totalLungs++;
        }
    }
}
