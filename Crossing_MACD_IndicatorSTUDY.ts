input fastLength = 12;
input slowLength = 26;
input MACDLength = 9;
input averageType = AverageType.EXPONENTIAL;
input showBreakoutSignals = no;

def Value = MovingAverage(averageType, close, fastLength) - MovingAverage(averageType, close, slowLength);
def Avg = MovingAverage(averageType, Value, MACDLength);

def Diff = Value - Avg;
def ZeroLine = 0;

def UpSignal = if Diff crosses above ZeroLine then ZeroLine else Double.NaN;
def DownSignal = if Diff crosses below ZeroLine then ZeroLine else Double.NaN;

def Condition1 = if 
value[1] < avg[1] and
value > avg
then 1 else Double.NaN;
plot x = Condition1;
x.SetPaintingStrategy(paintingStrategy = PaintingStrategy.BOOLEAN_ARROW_UP);
