pragma solidity ^0.4.0;


contract AnalysisParameters {
    address owner;

    function AnalysisParameters() public{
        owner = msg.sender;
    }

    struct Indicator{
      string name;
      uint min;
      uint max;
      uint weight;
    }

    enum Compared {
        High,
        Healthy,
        Low
    }

    mapping(uint => Indicator) indicators;
    uint index = 0;

    modifier minMaxCheck (uint min, uint max) {
        require(max > min);
        _;
    }

    function setIndicator(string _name, uint _min, uint _max, uint _weight) public minMaxCheck(_min, _max) {
        Indicator memory indicator = Indicator(_name, _min, _max, _weight);
        indicators[index] = indicator;
        index ++;
    }

    function getIndicator(uint _index) public view returns (string, uint, uint, uint) {
        Indicator storage indicator = indicators[_index];

        return (indicator.name, indicator.min, indicator.max, indicator.weight);
    }

    function numIndicators() public view returns (uint) {
        return index;
    }

    function updateMin(uint _index, uint _min){
        indicators[_index].min = _min;
    }

    function updateMax(uint _index, uint _max){
        indicators[_index].max = _max;
    }

    function updateWeight (uint _index, uint _weight) {
        indicators[_index].weight = _weight;
    }

    // function getIndicator(uint _index) public returns (Indicator){
    //     require(_index <= index);
    //     return indicators[_index];
    // }

    function checkValue(uint _index, uint _value) public view returns (Compared){
        require(_index <= index);
        if (_value < indicators[_index].min) {
            return Compared.Low;
        }else if (_value < indicators[_index].max){
            return Compared.Healthy;
        }else if (_value > indicators[_index].max){
            return Compared.High;
        }
    }
}