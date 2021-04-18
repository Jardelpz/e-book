from datetime import datetime


class Page:
    def __init__(self, number, content):
        self.number = number
        self.start_time = datetime.now()
        self.duration = 0
        self.content = content

    @property
    def start_time(self):
        return self._start_time

    @start_time.setter
    def start_time(self, value):
        self._start_time = value

    @property
    def content(self):
        return self._content

    @content.setter
    def content(self, value):
        self._content = value

    @property
    def duration(self):
        return self._duration

    @duration.setter
    def duration(self, minutes):
        self._duration = minutes

    def set_duration(self, end_duration: datetime):
        self._duration = round((end_duration - self.start_time).total_seconds() / 60, 2)
